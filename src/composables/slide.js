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



  const forwardIndex = () => {
    if(!isCleared){
      clearInterval(indexIntervalId);
      isCleared = true;
      console.log("ll")

    }
    
    if(currentIndex.value === titles.length -1){
      currentIndex.value = 0
    } else {
      currentIndex.value = currentIndex.value + 1;
    }
  }

  const backwardIndex = () => {

    if(!isCleared){
      clearInterval(indexIntervalId);
      isCleared = true;
      console.log("ll")

    }

    if(currentIndex.value === 0){
      currentIndex.value = titles.length -1
    } else {
      currentIndex.value = currentIndex.value - 1;
    }
  }

  let isCleared = false;
  let indexIntervalId = setInterval(() => {
    if(currentIndex.value === titles.length -1){
      currentIndex.value = 0
    } else {
      currentIndex.value = currentIndex.value + 1;
    }
  }, 10000);
  



  return {currentIndex, currentTitle, currentTopicDetail, supportingDetails, setCurrentIndex, forwardIndex, backwardIndex}





}

