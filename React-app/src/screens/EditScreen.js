import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, editBlogPost } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === id);
  //console.log(blogPost.title);
  //   const [title, setTitle] = useState(blogPost.title);
  //   const [content, setContent] = useState(blogPost.content);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop());
      }}
    />
  );
  //   (
  //     <View>
  //       <Text style={styles.label}>Edit name:</Text>
  //       <TextInput
  //         style={styles.input}
  //         value={title}
  //         onChangeText={(text) => setTitle(text)}
  //       />
  //       <Text style={styles.label}>Edit content:</Text>
  //       <TextInput
  //         style={styles.input}
  //         value={content}
  //         onChangeText={(text) => setContent(text)}
  //       />
  //       <Button
  //         title="Save blog post"
  //         onPress={() => {
  //           //   addBlogPost(title, content, () => {
  //           //     navigation.navigate("Index");
  //           //   });
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

export default EditScreen;
