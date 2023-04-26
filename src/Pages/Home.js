import { useEffect, useState } from 'react';
import MotionHoc from './MotionHoc';
import Axios from 'axios';
import { translate } from '@vitalets/google-translate-api';
import Chatbot from 'react-chatbot-kit';
import ActionProvider from '../components/ActionProvider';
import MessageParser from '../components/MessageParser';
import config from '../config';

const HomeComponent = () => {
  const [text, setText] = useState('');

  const handleTranslate = async () => {
    // const result = await Axios.
    const translatedText = await translate(
      'Light blight is a fungal disease that affects potato plants, causing dark spots on leaves and stems, and can lead to significant crop loss. As a farmer in India, there are steps you can take to control the spread of the disease and protect your potato plants. Here are step-by-step instructions for managing light blight: Step 1: Remove infected plants The first step in managing light blight is to remove any infected plants immediately to prevent the disease from spreading. Cut off the infected parts of the plant and dispose of them away from the field. Do not use them for composting. Duration: 2-3 days. Achievement: Removing infected plants will help prevent the spread of the disease and protect your healthy potato plants. Step 2: Use fungicides Fungicides can be an effective way to control light blight. Spray a fungicide on the remaining plants to protect them from the disease. Follow the instructions on the label carefully and apply the fungicide according to the recommended dosage. Duration: 3-4 days. Achievement: Fungicides will help protect the remaining plants from getting infected with light blight. Step 3: Rotate crops Rotating crops is an important step in managing light blight. Do not plant potatoes in the same area for at least three years after a light blight outbreak. This will help reduce the chances of the disease spreading. Duration: 1-2 years. Achievement: Crop rotation will help break the disease cycle and prevent the buildup of the pathogen in the soil. Step 4: Practice good field hygiene Good field hygiene is essential for managing light blight. Keep the field clean and free of debris, as it can harbor the disease. Ensure that the field is well-drained and avoid over-watering, as excess moisture can lead to fungal growth. Duration: Ongoing. Achievement: Good field hygiene will help prevent the disease from spreading and protect your potato plants from getting infected. Step 5: Monitor your crops Regularly monitor your potato plants for signs of light blight, such as dark spots on leaves and stems. If you detect any signs of the disease, take immediate action to prevent the spread. Duration: Ongoing. Achievement: Monitoring your crops will help you detect light blight early and take action to prevent the spread. In conclusion, managing light blight requires a combination of preventive measures, including removing infected plants, using fungicides, rotating crops, practicing good field hygiene, and monitoring your crops. Following these steps can help protect your potato plants from the disease and ensure a healthy harvest.',
      {
        to: 'mr'
      }
    );
    console.log('Translated text: ', translatedText);
    setText(translatedText.text);
    return translatedText;
  };

  // useEffect(() => {
  //   handleTranslate();
  // }, []);

  return (
    <div
    // style={{ padding: '100px' }}
    >
      <h1>Home</h1>
      {/* <h2>{text}</h2> */}
      {/* <div
        style={{
          position: 'fixed',
          right: 0,
          top: 0,
          height: '100vh',
          width: '30%',
          textAlign: 'center'
        }}
      >
        <h2>Zom The Chatbot!</h2> */}
      {/* <form style={{ width: '100%' }}>
          <input type="text" />
        </form> */}
      {/* <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      /> */}
      {/* </div> */}
    </div>
  );
};

const Home = MotionHoc(HomeComponent);

export default Home;
