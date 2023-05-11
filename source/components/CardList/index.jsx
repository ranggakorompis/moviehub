import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';

// styles
import style from './style'; // local

// components
import { Gap } from '../Gap'



export default function CardList({
  title=null,
  titleSize='normal',
  list=null,
  navigation
}) {
  function itemOnPress(item) {
    console.log(`Title = ${item.title} | Year = ${item.year}`);
    navigation.push('MovieSeries');
  };



  return (
    <View style={style.component}>
      {(title) && <Text style={style.title(titleSize)}>{title}</Text>}
      <ScrollView style={style.scrollView} horizontal={true}>
        {(list) && list.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={style.item((index + 1 === list.length) && true)}
            onPress={() => itemOnPress(item)}
            activeOpacity={0.5}
          >
            {(item.image === null) ? (
              <Image source={item.image} style={style.itemImage} />
            ) : (
              <View style={style.itemImage} />
            )}
            <Text style={style.itemTitle}>{item.title}</Text>
            <Text style={style.itemYear}>{item.year}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
