from fastapi import FastAPI ,HTTPException
import tensorflow as tf
from tensorflow.keras.models import load_model
import numpy as np
import cv2
from pydantic import BaseModel
import base64

app=FastAPI()

class ImageData(BaseModel):
    image: str


plant_model_path = './pretrained_weights/plant_disease_3.h5'
plant_model = load_model(plant_model_path)
plant_model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])

soil_model_path = './pretrained_weights/soil_type_1.h5'
soil_model = load_model(soil_model_path)
soil_model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])

fire_model_path = './pretrained_weights/fire_detection.h5'
fire_model = load_model(fire_model_path)
fire_model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

pest_model_path = './pretrained_weights/pest_detection.h5'
pest_model = load_model(pest_model_path)
pest_model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])


@app.post("/plantDisease")
async def plantDisease(image_data:ImageData):
    try:
        image_bytes = base64.b64decode(image_data.image)
        np_arr = np.frombuffer(image_bytes, np.uint8)
        image = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)
        resized_image = cv2.resize(image, (256, 256))
        input_image = np.expand_dims(resized_image, axis=0)

        predictions = plant_model.predict(input_image)
        prediction=int(np.argmax(predictions))
        return prediction

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    

@app.post("/soilType")
async def soilType(image_data:ImageData):
    
    try:
        image_bytes = base64.b64decode(image_data.image)
        np_arr = np.frombuffer(image_bytes, np.uint8)
        image = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)
        resized_image = cv2.resize(image, (256, 256))
        input_image = np.expand_dims(resized_image, axis=0)
        

        predictions = soil_model.predict(input_image)
        prediction=int(np.argmax(predictions))
        return prediction
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    

@app.post("/fireDetect")
async def fireDetection(image_data:ImageData):
    try:
        image_bytes = base64.b64decode(image_data.image)
        np_arr = np.frombuffer(image_bytes, np.uint8)
        image = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)



        resized_image = cv2.resize(image, (256, 256))
        resized_image = resized_image/255
        input_image = np.expand_dims(resized_image, axis=0)

        predictions = fire_model.predict(input_image)
        if(predictions>=0.5):
            prediction=1
        else:
            prediction=0
        return prediction

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    

@app.post("/pestDetect")
async def pestDetect(image_data:ImageData):
    try:
        image_bytes = base64.b64decode(image_data.image)
        np_arr = np.frombuffer(image_bytes, np.uint8)
        image = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)



        resized_image = cv2.resize(image, (256, 256))
        resized_image = resized_image/255
        input_image = np.expand_dims(resized_image, axis=0)

        predictions = pest_model.predict(input_image)
        result=np.argmax(predictions)

        pest_dict={
            0:"Fruit Piercing Moth",
            1:"Gall Flies",
            2:"Locust",
            3:"Stem Borer"
        }
        return(pest_dict[result])

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    


