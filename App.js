import React from 'react'; // Correct capitalization
import { View, Text, ScrollView } from 'react-native'; // Import Text and ScrollView
import Boat from './Component/boat';

const AllBoat = () => { // Component name should start with a capital letter
  return (
      <View>
        <ScrollView>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text>GetABoat - For Sale</Text>
          <Text></Text>
          <Text></Text>

          <Boat
              name="Sea Ray 500 Sundancer"
              description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
              picture={require('./imgE7/sea_ray.jpg')}
              icon_name="ship"
          />

          <Boat
              name="Four Winns Horizon 180"
              description="A sporty look and refined details truly set the Horizon 180 above all others."
              picture={require('./imgE7/four_winns.jpg')}
              icon_name="ship"
          />

          <Boat
              name="Flipper 640 ST"
              description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
              picture={require('./imgE7/flipper.jpg')}
              icon_name="ship"
          />

          <Boat
              name="Princess V48"
              description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
              picture={require('./imgE7/princess.jpg')}
              icon_name="ship"
          />

          <Boat
              name="Bayliner 175 Bowrider"
              description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
              picture={require('./imgE7/bayliner.jpg')}
              icon_name="ship"
          />

          <Boat
              name="Fairline Targa 47"
              description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
              picture={require('./imgE7/fairline.jpg')}
              icon_name="ship"
          />
        </ScrollView>
      </View>
  );
};

export default AllBoat;
