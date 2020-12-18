from flask import Flask
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS, cross_origin
import joblib
from joblib import load
import numpy as np

APP = Flask(__name__)
API = Api(APP)
cors = CORS(APP)
APP.config['CORS_HEADERS'] = 'Content-Type'

HOUSE_PRICES_MODEL = joblib.load('./house_prices.mdl')


class Predict(Resource):

    @staticmethod
    @cross_origin()
    def post():
        parser = reqparse.RequestParser()
        parser.add_argument('OverallQual')
        parser.add_argument('GrLivArea')
        parser.add_argument('BsmtFinSF1')
        parser.add_argument('TotalBsmtSF')
        parser.add_argument('2ndFlrSF')
        parser.add_argument('YearBuilt')
        parser.add_argument('1stFlrSF')
        parser.add_argument('LotArea')
        parser.add_argument('GarageArea')
        parser.add_argument('GarageCars')

        args = parser.parse_args()  # creates dict

        # convert input to array
        X_new = np.fromiter(args.values(), dtype=float)

        out = {'Prediction': HOUSE_PRICES_MODEL.predict([X_new])[0]}

        return out, 200


class Wakeup(Resource):

    @staticmethod
    def get():
        parser = reqparse.RequestParser()
        out = "I'm awake!"

        return out, 200


API.add_resource(Predict, '/predict')
API.add_resource(Wakeup, '/wakeup')

# if __name__ == '__main__':
#     APP.run(debug=True, port='1080')
