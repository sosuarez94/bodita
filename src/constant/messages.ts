const alias = import.meta.env.VITE_ALIAS ;

export interface Data {
    title: string,
    place: string,
    link?: string,
    time?: string,
    ubication?: string,
    messages: string,
    img: string,
    extra?:string
}

export const messageInfo: Data[] = [
    {
        title: "Ceremonia",
        place: "San Cayetano",
        time: "11:00 hs",
        link: "https://www.google.com/maps/place/San+Cayetano+Church/@-32.9168245,-68.8548349,17z/data=!4m14!1m7!3m6!1s0x967e097a2f3325c1:0x9fa7d28ca80a08b1!2sSan+Cayetano+Church!8m2!3d-32.916829!4d-68.85226!16s%2Fg%2F1tj_6fts!3m5!1s0x967e097a2f3325c1:0x9fa7d28ca80a08b1!8m2!3d-32.916829!4d-68.85226!16s%2Fg%2F1tj_6fts?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D",
        ubication: "Anatole France 642, M5501,Godoy Cruz, Mendoza",
        messages: "Este momento es muy especial para nosotros y nos ilusiona poder compartirlo contigo. Estaremos felices de recibirte en la Iglesia San Cayetano , en Godoy Cruz",
        img: "church.png",

    },
    {
        title: "Almuerzo",
        place: "Espacios del Monte",
        link: "https://www.google.com/maps/place/Espacios+del+Monte/@-32.9970756,-68.9088987,17z/data=!4m14!1m7!3m6!1s0x967de0209d70584b:0xfc2f6c807e6e2576!2sEspacios+del+Monte!8m2!3d-32.9970801!4d-68.9063238!16s%2Fg%2F11b_2dg0c1!3m5!1s0x967de0209d70584b:0xfc2f6c807e6e2576!8m2!3d-32.9970801!4d-68.9063238!16s%2Fg%2F11b_2dg0c1?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D",
        ubication: "Ruta Panamericana. Lago del Monte 4000, Luján de Cuyo 5507",
        messages: "Luego de la ceremonia realizaremos un almuerzo en Espacios del Monte. No te olvides de sumar alguna bebida para compartir durante el almuerzo.",
        img: "dinner.png",

    },
    {
        title: "Media Tarde",
        place: "Mate time!!",
        messages: "Quienes quieran quedarse, son bienvenidos hasta el final! Hasta las 20:00hs compartiremos una linda media tarde, si querés sumarte con algo rico (matecito, facturas, algo salado, lo que quieras!) será muy bien recibido.",
        img: "mate.png",
    },
    {
        title: "Vestimenta",
        place: "Semi formal",
        messages: "Queremos que te sientas cómodo! No hace falta ir formal y mucho menos de tacos. Si podes vestir de tonos claros, sería ideal ya que buscamos un ambiente suave y armonioso.",
        img: "t-shirt.png",
    },
    {
        title: "Un detalle especial",
        place: "Opcional",
        messages: "Como cada nuevo comienzo, estamos armando poco a poco nuestra vida juntos. Si querés sumarte con un pequeño detalle, sea grande o chico, será recibido con amor y gratitud. Podés hacerlo a través del siguiente Alias Pero lo más importante siempre es que estés ahí, celebrando con nosotros.",
        img: "gif.png",
        extra: `${alias}`
    }
]