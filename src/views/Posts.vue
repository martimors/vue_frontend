
<template>
  <div id="posts">
    <Posts />
  </div>
</template>

<script>
import Posts from "../components/Posts";
import { db } from '../main'
import axios from "axios";

export default {
  name: 'Posts',
  data () {
    return {
      locations: []
    }
  },
  firestore () {
    return {
      locations: db.collection('posts').orderBy('posted_datetime')
    }
  }
}
</script>

<style>
</style>
