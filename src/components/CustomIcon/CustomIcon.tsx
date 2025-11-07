
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../../assets/fonts/icomoon/selection.json';

const CustomIcon = createIconSetFromIcoMoon(
  icoMoonConfig,
  'icomoon',
  'icomoon.ttf'
);

export default CustomIcon;

/* After updating icomoon files for new icons, make sure to run below commands
  npx react-native-asset

  For viewing all the icons use below code
  const icons = require('../../assets/fonts/selection.json');

  <View style={{flex:1, flexDirection: 'column'}}>
    {icons.icons.map((icon, index) => <CustomIcon key={`icon-${index}`} name={icon['properties']['name']} size={30} color="red"/> )}
  </View>
*/
