export const StatusName = (name: string) => {
  switch (name) {
    case "IN_PRODUCTION":
      return "Em preparação";
    case "DONE":
    return "Pronto";
    default:
      return "Fila de espera";
  }
}
