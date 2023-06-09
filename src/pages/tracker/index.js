import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import UserLayout from "../../components/layout/UserLayout";
import "leaflet/dist/leaflet.css";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function Tracker() {
  return (
    <UserLayout>
      <MapContainer center={[-8.6719, 115.748]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-8.6719, 115.748]}>
          <Popup>
            KMP. Dharma Ferry VIII. <br /> IMO :.
          </Popup>
        </Marker>
      </MapContainer>
      <Flex mt='3rem' direction='column'>
        <Heading>Fuel Prediction: </Heading>
        <Text>23 Litre</Text>
      </Flex>
    </UserLayout>
  );
}
