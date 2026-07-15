import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Box } from "@mui/material";

// (Optional) Fix default icon issue (not required if using custom icon)
delete L.Icon.Default.prototype._getIconUrl;

// ✅ Red custom icon
const redIcon = new L.Icon({
    iconUrl:
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

export default function MapComponent() {
    return (
        <Box sx={{ padding: '2%', px: '5%' }}>
            <Box
                style={{
                    borderRadius: "15px",
                    border: "2px solid rgba(99, 102, 241, 0.2)",
                    overflow: "hidden", // 🔥 VERY IMPORTANT
                }}
            >
                <MapContainer
                    center={[21.1458, 79.0882]}
                    zoom={13}
                    style={{ height: "clamp(250px, 42vh, 45vh)", width: "100%", borderRadius: "15px" }}
                >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[21.1458, 79.0882]} icon={redIcon}>
                        <Popup>📍 My Location - Nagpur</Popup>
                    </Marker>
                </MapContainer>
            </Box>
        </Box>
    );
}