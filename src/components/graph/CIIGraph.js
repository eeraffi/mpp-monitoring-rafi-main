import { faker } from "@faker-js/faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import useShipStore from "../../store/useShipStore";

export default function Graph() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
   const { ship, dataKencana, dataFerry } = useShipStore((state) => ({
     ship: state.ship,
     dataKencana: state.dataKencana,
     dataFerry: state.dataFerry,
   }));

  const options = {
    // maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Carbon Intensity Indicator",
      },
    },
  };

  const labels = Array.from(
    { length: dataKencana.length },
    (_, index) => index + 1
  );

  const dataShip = ship === 'ferry' ? dataFerry : dataKencana

  // const labels = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  // ];
  // faker.date.betweens({ count: 3, from: "2015-01-01", to: "2015-01-05" });

  const data = {
    labels,
    datasets: [
      {
        label: "KM. Dharma Ferry VIII",
        data: dataShip,
      },
    ],
  };

  return <Line options={options} data={data} />;
}
