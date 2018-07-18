import React from "react";
    import { GiftedChat } from "react-native-gifted-chat";

    export default class MyChat extends React.Component {
      state = {
        messages: []
      };

      componentDidMount() {
        this.setState({
          messages: [
            {
              _id: 1,
              text: "start chat",
              createdAt: new Date(),
              user: {
                _id: 1,
                name: "React Native",
                avatar: "https://placeimg.com/140/140/any"
              }
            }
          ]
        });
      }

      render() {
        return <GiftedChat messages={this.state.messages} />;
      }
    }