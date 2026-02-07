import React, { useState } from 'react'
import { 
  View, 
  Text, 
  Pressable, 
  StyleSheet, 
  Animated 
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

type TabKey = 'home' | 'tasks' | 'wallet' | 'profile'

interface TabConfig {
  key: TabKey
  label: string
  icon: string
  activeIcon: string
}

interface BottomTabBarProps {
  activeTab: TabKey
  disabledTabs?: TabKey[]
  badgeCounts?: Partial<Record<TabKey, number>>
  onTabSelect: (tab: TabKey) => void
  showLabels?: boolean
}

const tabConfigs: TabConfig[] = [
  { key: 'home', label: 'Home', icon: 'home-outline', activeIcon: 'home' },
  { key: 'tasks', label: 'Tasks', icon: 'list-outline', activeIcon: 'list' },
  { key: 'wallet', label: 'Wallet', icon: 'wallet-outline', activeIcon: 'wallet' },
  { key: 'profile', label: 'Profile', icon: 'person-outline', activeIcon: 'person' },
]

export const BottomTabBar: React.FC<BottomTabBarProps> = ({
  activeTab,
  disabledTabs = [],
  badgeCounts = {},
  onTabSelect,
  showLabels = true,
}) => {
  const [scaleAnim] = useState(new Animated.Value(1))

  const handlePress = (tab: TabKey) => {
    if (disabledTabs.includes(tab)) return
    
    // Animation feedback
    Animated.sequence([
      Animated.spring(scaleAnim, {
        toValue: 0.9,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
      })
    ]).start()
    
    onTabSelect(tab)
  }

  return (
    <View style={styles.container}>
      {tabConfigs.map((tab) => {
        const disabled = disabledTabs.includes(tab.key)
        const active = activeTab === tab.key
        const badgeCount = badgeCounts[tab.key] || 0

        return (
          <Pressable
            key={tab.key}
            onPress={() => handlePress(tab.key)}
            style={styles.tab}
            disabled={disabled}
            accessibilityRole="tab"
            accessibilityState={{ selected: active, disabled }}
          >
            <View style={styles.tabContent}>
              <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                <Ionicons
                  name={active ? tab.activeIcon : tab.icon}
                  size={24}
                  color={active ? '#007AFF' : disabled ? '#CCCCCC' : '#8E8E93'}
                />
              </Animated.View>
              
              {badgeCount > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>
                    {badgeCount > 99 ? '99+' : badgeCount}
                  </Text>
                </View>
              )}
              
              {showLabels && (
                <Text
                  style={[
                    styles.label,
                    active && styles.activeLabel,
                    disabled && styles.disabledLabel,
                  ]}
                  numberOfLines={1}
                >
                  {tab.label}
                </Text>
              )}
              
              {active && <View style={styles.activeIndicator} />}
            </View>
          </Pressable>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#C6C6C8',
    backgroundColor: '#FFFFFF',
    paddingBottom: 20, // Safe area for iPhone
  },
  tab: {
    flex: 1,
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  label: {
    fontSize: 10,
    marginTop: 4,
    color: '#8E8E93',
  },
  activeLabel: {
    color: '#007AFF',
    fontWeight: '600',
  },
  disabledLabel: {
    color: '#CCCCCC',
  },
  activeIndicator: {
    position: 'absolute',
    top: 0,
    height: 3,
    width: 32,
    backgroundColor: '#007AFF',
    borderRadius: 1.5,
  },
  badge: {
    position: 'absolute',
    top: 4,
    right: '50%',
    marginRight: -24,
    backgroundColor: '#FF3B30',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '600',
  },
})