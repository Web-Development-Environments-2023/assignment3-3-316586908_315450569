<template>
  <b-container>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>
    <b-col>
      <b-row v-for="r in recipes" :key="r.id" style="padding:10px">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-row>
    </b-col>
  </b-container>
</template>


<script>
import state from "../store.js";
import RecipePreview from "./RecipePreview";
export default {
  name: "RecipePreviewListLoggedIn",
  components: {
    RecipePreview
  },
  props: {
    title: {
      type: String,
    }
  },
  data() {
    return {
      recipes: []
    };
  },
  mounted() {
    this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      try {
        const response = await this.axios.get(
            this.$root.store.server_domain + "/users/lastseen",
        //   "http://localhost:3000/recipes/random",
          // this.$root.store.server_domain + "/recipes/random",
          // "https://test-for-3-2.herokuapp.com/recipes/random"
        );

        // console.log(response);
        const recipes = response.data.recipes;
        this.recipes = [];
        this.recipes.push(...recipes);
        // console.log(this.recipes);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style>

</style>