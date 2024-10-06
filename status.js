module.exports = (client) => {

    client.status(
        {
            name: "HOBBAA!",
            type: "COMPETING",
            status: "dnd",
            time: 12
        },
        {
            name: "Naber?",
            type: "PLAYING",
            status: "dnd",
            time: 12
        }
    )

}