import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import UserLayout from "../../components/layout/UserLayout";
import "leaflet/dist/leaflet.css";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function Tracker() {
  return (
    <UserLayout>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
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
