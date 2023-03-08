This is a web application that allows users to generate audio voiceovers from text input. The app is built using React for the front-end, AWS Amplify for the back-end infrastructure, and a combination of AWS Lambda, DynamoDB, S3, and API Gateway for processing and storing the audio files.

## Getting Started
To get started with the app, you'll need to install the necessary dependencies and configure the AWS services.

1. Clone the repository and navigate to the root directory.
2. Install the necessary dependencies by running `npm install`.
3. Configure the AWS Amplify backend by running `amplify init` and following the prompts.
4. Add the necessary AWS services by running `amplify` add api and `amplify add storage`.
5. Deploy the AWS resources by running `amplify push`.
6. Start the app by running `npm start`.

## Architecture
The app is built using a serverless architecture, with AWS Lambda functions handling the text-to-speech conversion and API Gateway providing a RESTful API for accessing the Lambda functions.

![image](https://user-images.githubusercontent.com/29309900/223878267-87ee8682-5352-4610-a468-2de318b45100.png)

The text input and audio files are stored in an S3 bucket, while a DynamoDB table is used to store metadata about each voiceover request, such as the text input and the corresponding audio file URL.

## Screenshots
![Screenshot 2023-03-08 at 6 27 57 PM](https://user-images.githubusercontent.com/29309900/223878100-ea07c045-abe4-400c-9720-dab8ffb44e49.png)
![Screenshot 2023-03-08 at 6 28 38 PM](https://user-images.githubusercontent.com/29309900/223878129-00bf4d6c-d7ef-4749-a5cc-6cacbbe214ba.png)
![Screenshot 2023-03-08 at 6 28 38 PM](https://user-images.githubusercontent.com/29309900/223878110-e012bb8b-1cd0-4e2a-8630-97c7b93c1c02.png)

