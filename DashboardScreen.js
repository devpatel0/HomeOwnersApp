import React from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';  // Import Svg and related elements

const SearchIcon = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}  // Set explicit width
      height={24} // Set explicit height
      viewBox="0 0 24 24"
    >
      <G fill="none">
        <Path
          fill="#999"  // Explicit fill color
          fillRule="evenodd"
          d="M11 18a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0-12a5 5 0 0 0-5 5a1 1 0 1 0 2 0a3 3 0 0 1 3-3a1 1 0 1 0 0-2"
          clipRule="evenodd"
        />
        <Path
          stroke="#999"  // Explicit stroke color
          strokeLinecap="round"
          strokeWidth="2"
          d="m20 20l-2-2"
        />
      </G>
    </Svg>
  );
};

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <SearchIcon style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search items and services"
          placeholderTextColor="#999"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#FFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  searchIcon: {
    marginRight: 10,  // Add space between the icon and input
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    color: '#333',
  },
});

export default DashboardScreen;
