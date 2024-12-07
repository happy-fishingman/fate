import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { useNavigate } from 'react-router-dom';

export default function MenuContent() {
  const navigate = useNavigate(); // 使用useNavigate钩子用于页面跳转

  const handleHome = () => {
    navigate('/hospitalboard'); // 跳转到指定路由
  };

  const handleAnalytics = () => {
    navigate('/hospitalboard/analytics'); // 跳转到指定路由
  };

  const mainListItems = [
    { text: 'Home', icon: <HomeRoundedIcon />, onclick: handleHome },
    { text: 'Analytics', icon: <AnalyticsRoundedIcon />, onclick: handleAnalytics },
    // Add more items if needed
  ];

  const secondaryListItems = [
    { text: 'System Framework', icon: <SettingsRoundedIcon /> },
    { text: 'About', icon: <InfoRoundedIcon /> },
    // Add more items if needed
  ];

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton selected={index === 0} onClick={item.onclick}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
