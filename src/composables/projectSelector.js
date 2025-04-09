import {ref, computed} from 'vue';


export function useProjectSelector(webStore){

  let titles = [];
  let media = [];
  let dates = [];
  let githubLinks = [];
  let applicationLinks = [];
  let descriptions = [];
  let currentIndex = ref(0)

  let content = ref(webStore);

  for (let topic in content.value) {
    titles.push(content.value[topic].title);
    media.push(content.value[topic].video);
    dates.push(content.value[topic].dateCompleted);
    githubLinks.push(content.value[topic].github);
    applicationLinks.push(content.value[topic].application);
    descriptions.push(content.value[topic].description);
  }

  
  let currentTitle = computed(() => titles[currentIndex.value]);
  let currentMedia = computed(() => media[currentIndex.value]);
  let currentDate = computed(() => dates[currentIndex.value]);
  let currentGithub = computed(() => githubLinks[currentIndex.value]); 
  let currentApplication = computed(() => applicationLinks[currentIndex.value]);   
  let currentDescription = computed(() => descriptions[currentIndex.value]); 


  const setCurrentIndex = (elementKey) => {
    currentIndex.value = elementKey
  }
  



  return {setCurrentIndex, currentIndex, currentTitle, titles, currentMedia, currentDate, currentGithub, currentApplication, currentDescription }
}

