import {ref, computed} from 'vue';


export function useSlide(webStore){

  let titles = [];
  let topicDetails = [];
  let supportingDetails = [];

  let currentIndex = ref(0)

  let content = ref(webStore);

  for (let topic in content.value) {
    titles.push(content.value[topic].title);
    topicDetails.push(content.value[topic].img);
    supportingDetails.push(content.value[topic].img);
  }

  
  let currentTitle = computed(() => titles[currentIndex.value]);
  let currentTopicDetail = computed(() => topicDetails[currentIndex.value]) 

  const setCurrentIndex = (elementKey) => {
    currentIndex.value = elementKey
  }



  return {currentIndex, currentTitle, currentTopicDetail, supportingDetails, setCurrentIndex}

    // const forwardTitle = () => {
  //   currentIndex.value = currentIndex.value + 1;
  // }



}

