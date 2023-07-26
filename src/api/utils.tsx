

export function formatName(name: string): string {
  const normalized = name
  .normalize("NFD") // Descompone caracteres acentuados en sus formas base y diacríticos
  .replace(/[\u0300-\u036f]/g, "") // Elimina los caracteres diacríticos
  .toLowerCase();

  if (normalized.includes("nidoran♀")) {
    return normalized.replace("nidoran♀", "nidoran-f");
  } else if (normalized.includes("nidoran♂")) {
    return normalized.replace("nidoran♂", "nidoran-m");
  } else if (normalized.includes(". ")) {
    return normalized.replace(". ", "-");
  } else if (normalized.includes("farfetch'd")) {
    return normalized.replace("farfetch'd", "farfetchd");
  } else if (name.includes("flabébé")) {
    return  normalized.replace("flabebe", "flabebe");
  } else if (name.includes("shaymin")) {
    return name.replace("shaymin", "shaymin-land");
  }  else if (name.includes("pumpkaboo")) {
    return name.replace("pumpkaboo", "pumpkaboo-average");
  } else if (name.includes("gourgeist")) {
    return name.replace("gourgeist", "gourgeist-average");
  }  else if (name.includes("landorus")) {
    return name.replace("landorus", "landorus-incarnate");
  } else if (name.includes("keldeo")) {
    return name.replace("keldeo", "keldeo-ordinary");
  } else if (name.includes("meloetta")) {
    return name.replace("meloetta", "meloetta-aria");
  } else if (name.includes("thundurus")) {
    return name.replace("thundurus", "thundurus-incarnate");
  } else if (name.includes("basculin")) {
    return name.replace("basculin", "basculin-red-striped");
  } else if (name.includes("wormadam")) {
    return name.replace("wormadam", "wormadam-plant");
  } else if (normalized.includes("mr-mime")) {
    return normalized.replace(/mr-mime/g, "mr-mime");
  } else if (normalized.includes("mime jr.")) {
    return normalized.replace(/mime jr./g, "mime-jr");
  } else if (normalized.includes("aegislash")) {
    return normalized.replace("aegislash", "aegislash-shield");
  } else if (normalized.includes("zygarde")) {
    return normalized.replace("zygarde", "zygarde-50");
  } else if (normalized.includes("meowstic")) {
    return normalized.replace("meowstic", "meowstic-male");
  } else {
    return normalized;
  }
}
