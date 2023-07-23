

export function formatName(name: string): string {
  console.log(name);
  
  if (name.includes("Nidoran♀")) {
    return name.replace("Nidoran♀", "nidoran-f");
  } else if (name.includes("Nidoran♂")) {
    return name.replace("Nidoran♂", "nidoran-m");
  } else if (name.includes(". ")) {
    return name.replace(". ", "-");
  } else if (name.includes("Farfetch'd")) {
    return name.replace("Farfetch'd", "farfetchd");
  } else if (name.normalize("NFD").includes("flabebe")) {
    return name.replace("flabébé", "flabebe");
  } else if (name.normalize("NFD").includes("Mr-Mime")) {
    return name.replace(/Mr-Mime/g, "mr-mime");
  } else if(name.includes("aegislash")){
    return name.replace("aegislash", "aegislash-shield")
  } else if(name.includes("zygarde")){
    return name.replace("zygarde", "zygarde-50")
  }  else if(name.includes("meowstic")){
    return name.replace("meowstic", "meowstic-male")
  }  
  else {
    return name.toLocaleLowerCase();
  }
}

