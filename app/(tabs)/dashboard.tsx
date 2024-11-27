import { useEffect, useState } from "react";
import { View, Dimensions, ScrollView, StatusBar } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Card from "../components/Card";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "http://192.168.178.158:3000/get/inventory-movement"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const barData = [];
  data.forEach((item) =>
    barData.push(
      {
        spacing: 2,
        labelWidth: 30,
        labelTextStyle: { color: "gray" },
        frontColor: "#177AD5",
        value: item.purchase,
        label: item.month,
      },
      {
        frontColor: "#ED6665",
        value: item.usage,
      }
    )
  );

  const commonProps = {
    maxValue: 4000,
    noOfSections: 5,
    barWidth: 25,
    xAxisLabelTextStyle: { color: "black" },
    yAxisTextStyle: { color: "black" },
    xAxisThickness: 0,
    yAxisThickness: 0,
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView
        className='flex-1 bg-zinc-200 items-center justify-center'
        // style={{ flex: 1, paddingTop: StatusBar.currentHeight }}
        edges={["top"]}
      >
        <View className='flex-1 flex-row items-center p-4 m-4 border-2 border-zinc-300 rounded-xl bg-white'>
          <View className=''>
            <BarChart
              {...commonProps}
              data={[{ value: 0 }]} // Minimal data just to show y-axis
              width={20}
              hideRules
              yAxisIndicesWidth={50}
              showFractionalValues={false}
            />
          </View>
          <ScrollView horizontal>
            <View>
              <BarChart
                {...commonProps}
                data={barData}
                roundedTop
                roundedBottom
                hideYAxisText
              />
            </View>
          </ScrollView>
        </View>
        <View className='flex-1 flex-row items-center p-4 m-4 border-2 border-zinc-300 rounded-xl bg-white'>
          <View>
            <BarChart
              {...commonProps}
              data={[{ value: 0 }]} // Minimal data just to show y-axis
              width={20}
              hideRules
              yAxisIndicesWidth={50}
              showFractionalValues={false}
            />
          </View>
          <ScrollView horizontal>
            <View>
              <BarChart
                {...commonProps}
                data={barData}
                roundedTop
                roundedBottom
                hideYAxisText
              />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Dashboard;
