import {ref, computed} from 'vue';


export function useWeaponSelector(webStore){

  let weaponSounds = [];
  let hitImages = [];
  let currentWeaponIndex = ref(0)

  let content = ref(webStore);

  for (let topic in content.value) {
    weaponSounds.push(content.value[topic].sound);
    hitImages.push(content.value[topic].hitImage);
  }

  
  let currentSound = computed(() => weaponSounds[currentWeaponIndex.value]);
  let currentHitImage = computed(() => hitImages[currentWeaponIndex.value]);


  const setCurrentWeaponIndex = (elementKey) => {
    currentWeaponIndex.value = elementKey
  }

  console.log(hitImages);
  console.log(currentWeaponIndex.value)
  console.log(currentHitImage)

  



  return {setCurrentWeaponIndex, currentWeaponIndex, currentSound, currentHitImage};
}

