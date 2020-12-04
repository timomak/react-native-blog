import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  //   const [title, setTitle] = useState("");
  //   const [content, setContent] = useState("");
  const { addBlogPost } = useContext(Context);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate("Index"));
      }}
    />
  );
  //   (
  //     <View>
  //       <Text style={styles.label}>Enter title:</Text>
  //       <TextInput
  //         style={styles.input}
  //         value={title}
  //         onChangeText={(text) => setTitle(text)}
  //       />
  //       <Text style={styles.label}>Enter content:</Text>
  //       <TextInput
  //         style={styles.input}
  //         value={content}
  //         onChangeText={(text) => setContent(text)}
  //       />
  //       <Button
  //         title="Add blog post"
  //         onPress={() => {
  //           addBlogPost(title, content, () => {
  //             navigation.navigate("Index");
  //           });
  //         }}
  //       />
  //     </View>
  //   );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 5,
  },
});

export default CreateScreen;
