import { Amplify} from 'aws-amplify';
import TextForm from './TextForm';
import AudioTable from './AudioTable';
import { withAuthenticator, Flex, Button, Text, Heading, Divider  } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

Amplify.configure({
  Auth: {
    region: "us-east-1",
    userPoolId: "us-east-1_lzMOALGz5",
    userPoolWebClientId: "15igqvs4dp1p25274m5npnnoto",
  },
  API: {
    endpoints: [
      {
        name: "vgapi",
        endpoint:
          "https://i99q1uu394.execute-api.us-east-1.amazonaws.com/prod/",
      }
    ]
  }
});

function App({ signOut, user }) {
  return (
    <>
      <Heading level={1}>Voiceover Generator</Heading>
      <Divider orientation="horizontal" />
      <Text>Hello {user.username}!</Text>
      <Flex>
      <TextForm/>
      <AudioTable/>
      </Flex>
      <Button onClick={signOut}>Sign out</Button>
    </>
  );
}

export default withAuthenticator(App);