<template>
  <div class="container">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <h1>{{ recipe.title }}</h1>
        <img :src="recipe.image" class="center" />
      </div>
      <div class="recipe-body">
        <div class="wrapper">
          <div class="wrapped">
            <div class="mb-3">
              <div>Ready in {{ recipe.readyInMinutes }} minutes</div>
              <div>Likes: {{ recipe.popularity }} likes</div>
              <div>Vegan: 
                <svg v-if="recipe.vegan" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </div>
              <div>Vegetarian:
                <svg v-if="recipe.vegetarian" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </div>
              <div>GlutenFree:
                <svg v-if="recipe.glutenFree" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </div>
              <div>Seen:
                <svg v-if="recipe.seen" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </div>
              <div>Favorite:
                <svg v-if="recipe.favorite" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </div>
              <div>Servings:
                {{recipe.servings}}
              </div>
            </div>
            Ingredients:
            <ul>
              <li
                v-for="(r, index) in recipe.ingredients"
                :key="index + '_' + r.ingredientName"
              >
                {{ r.ingredientName }} : {{ r.amount }} {{r.units}}
              </li>
            </ul>
            <div v-if="this.$root.store.username" style="display: flex; justify-content: center;">
              <div id="Save" v-if="!recipe.favorite" >
                <button class="btn btn-outline-success my-2 my-sm-0" @click="Save">Save To Favorite</button>
              </div>
              <div style="margin-left: 20px;">
                <button class="btn btn-outline-info my-2 my-sm-0" @click="prepare">Prepare Recipe
                  <!-- <router-link class="nav-link" style="color:black; height: 24px; width: 130px; padding: 0px " :to="{ name: 'recipePreparationPage', params: { id: this.$route.params.recipeId } } ">Prepare Recipe</router-link> -->
                </button>
              </div>
              <div style="margin-left: 20px;">
                <button class="btn btn-outline-warning my-2 my-sm-0" @click="add_to_meal" >Add To Meal</button>
              </div>
            </div>
        </div>
          <div v-if="recipe._instructions && recipe._instructions.length != 0" class="wrapped">
            Analyzed Instructions:
            <ol>
              <li v-for="s in recipe._instructions" :key="s.number">
                {{ (s.step != '') ? s.step : null }}
              </li>
            </ol>
          </div>
          <div v-else-if="recipe.instructions && recipe.instructions.length != 0">Instructions:
            <p>{{recipe.instructions}}</p>
          </div>
          <div v-else>There Are No Instructions Available
          </div>
        </div>
      </div>
      <!-- <pre>
      {{ $route.params }}
      {{ recipe }}
    </pre
      > -->
    </div>
    <br>
    <br>
  </div>
</template>

<script>
import store from "../store.js";
export default {
  data() {
    return {
      recipe: null
    };
  },
  async created() {
    try {
      let response;
      // response = this.$route.params.response;

      try {
        response = await this.axios.get(
          // "https://test-for-3-2.herokuapp.com/recipes/info",
          // this.$root.store.server_domain + "/recipes/info",
          this.$root.store.server_domain + "/recipes/reviewRecipe/" + this.$route.params.recipeId,
          {
            params: { id: this.$route.params.recipeId }
          }
        );

        // console.log("response.status", response.status);
        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }

      let {
        analyzedInstructions,
        instructions,
        ingredients,
        popularity,
        readyInMinutes,
        image,
        title,
        vegan,
        vegetarian,
        glutenFree,
        seen,
        favorite,
        servings
      } = response.data.recipe;
      let _instructions = null;
      if (analyzedInstructions)
      {
        _instructions = analyzedInstructions
          .map((fstep) => {
            if (fstep.steps[0].step.length != 0){
              fstep.steps[0].step = fstep.name + ' ' + fstep.steps[0].step;
              return fstep.steps;
            }
          })
          .reduce((a, b) => [...a, ...b], []);
      }

      let _recipe = {
        instructions,
        _instructions,
        analyzedInstructions,
        ingredients,
        popularity,
        readyInMinutes,
        image,
        title,
        vegan,
        vegetarian,
        glutenFree,
        seen,
        favorite,
        servings
      };

      this.recipe = _recipe;
    } catch (error) {
      console.log(error);
    }
  },
  methods:{
    async Save(){
      try{
        await this.axios.post(this.$root.store.server_domain + '/users/favorites',
        {
            recipeId: this.$route.params.recipeId
        });
        this.recipe.favorite = true;
      }
      catch (error){
        console.log(error);
      }
    },
    add_to_meal(){
      
      if (this.$route.params.recipeId == undefined)
        return;

      console.log("added to meal");
      // calculate total_step of the recipe
      let total_steps = 0;
      for (let i = 0 ; i < this.recipe.analyzedInstructions.length; i++){
                total_steps = total_steps + this.recipe.analyzedInstructions[i].steps.length;
      }

      let found_at_recipesAtMeal = this.$root.store.recipesAtMeal.findIndex(this.check);
      let curr_step = 0;
      if (found_at_recipesAtMeal != -1){
        curr_step = this.$root.store.recipesAtMeal[found_at_recipesAtMeal].recipe.curr_step;
      }

      let found_at_Meal = this.$root.store.Meal.findIndex(this.check);
      if (found_at_Meal == -1){
        this.$root.store.Meal.push({
            recipe: {
              id: this.$route.params.recipeId,
              popularity: this.recipe.popularity,
              readyInMinutes: this.recipe.readyInMinutes,
              image: this.recipe.image,
              title: this.recipe.title,
              vegan: this.recipe.vegan,
              vegetarian: this.recipe.vegetarian,
              glutenFree: this.recipe.glutenFree,
              seen: this.recipe.seen,
              favorite: this.recipe.favorite,
              servings:this.recipe.servings,
              total_steps: total_steps,
              curr_step: curr_step
            }
        });
      }
      else
        return;
      console.log(this.$root.store.Meal);
    },
    check(element){
      return element.recipe.id === this.$route.params.recipeId;
    },
    prepare(){
      console.log("prepare");
      this.add_to_meal();
      this.$router.push({ name: 'recipePreparationPage', params: { id: this.$route.params.recipeId } });
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
}
.wrapped {
  width: 50%;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
