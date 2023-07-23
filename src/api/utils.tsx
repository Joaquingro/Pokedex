

export function formatName(name: string): string {
  console.log(name);
  
  if (name.includes("Nidoran♀")) {
    return name.replace("Nidoran♀", "nidoran-f");
  } else if (name.includes("Nidoran♂")) {
    return name.replace("Nidoran♂", "nidoran-m");
  } else if (name.includes(". ")) {
    return name.replace(". ", "-");
  } else if (name.includes("Farfetch'd")) {
    return name.replace("Farfetch'd", "Farfetchd");
  } else if(name.includes("flabébé")){
    return name.replace("flabébé", "flabebe")
  } else if(name.includes("Mr-Mime")){
    return name.replace("Mr-Mime", "mr.-mime");
  } else if(name.includes("aegislash")){
    return name.replace("aegislash", "aegislash-shield")
  } else {
    return name;
  }
}

