import mqtt from "mqtt";
import supabase from "../../config/supabaseClient.js";

const client = mqtt.connect(process.env.MQTT_BROKER_URL!);

client.on("connect", () => {
    console.log("Connected to MQTT broker")
    client.subscribe("bus/+/gps")
})

client.on("message",async (topic, message) => {
    try {
        const payload = JSON.parse(message.toString());
        const {busid, lat, lng,timestamp} = payload;

       await supabase.from("tracking_realtime").insert({
        bus_id: busid,
        lat,
        lng,
        timestamp
       })
       console.log("da them gps: ", payload)
    } catch(err) {
        console.error("MQTT Message error: ", err)
    }
})