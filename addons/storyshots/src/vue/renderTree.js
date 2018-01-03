import Vue from 'vue';

function getRenderedTree(story, context) {
  const storyElement = story.render(context);

  const Constructor = Vue.extend(storyElement);
  const vm = new Constructor().$mount();

  return vm.$el;
}

export default getRenderedTree;
