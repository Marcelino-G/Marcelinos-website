import {ref, computed} from 'vue';
import { useWebsiteStore } from '@/stores/websiteStore.js';




export function useWeaponSelector(){

  const websiteStore = useWebsiteStore();

  let weaponImages = [];
  let descriptions = [];
  // let weaponSounds = [];
  // let hitImages = [];
  let currentWeaponIndex = ref(0)

  // let content = ref(webStore);

  for (let topic in websiteStore.projectsPage.supporting_content_header) {
    // weaponSounds.push(content.value[topic].sound);
    // hitImages.push(content.value[topic].hitImage);
    weaponImages.push(websiteStore.projectsPage.supporting_content_header[topic].weaponImage);
    descriptions.push(websiteStore.projectsPage.supporting_content_header[topic].description);
  }


  
  // let currentSound = computed(() => weaponSounds[currentWeaponIndex.value]);
  // let currentHitImage = computed(() => hitImages[currentWeaponIndex.value]);
 

  let currentHitImage = computed(() => websiteStore.projectsPage.supporting_content_header[currentWeaponIndex.value.toString()].hitImage);



  const setCurrentWeaponIndex = (elementKey) => {
    currentWeaponIndex.value = elementKey
  }

  

  return {setCurrentWeaponIndex, currentWeaponIndex, currentHitImage, weaponImages, descriptions};
}

