import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  overlayWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    ...StyleSheet.absoluteFillObject,
  },
  loadingWrapper: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 36,
    paddingVertical: 24,
    backgroundColor: 'white',
    borderRadius: 3
  },
  loadingText: {
    marginLeft: 36,
    fontSize: 17,
    color: 'rgba(0,0,0,.76)'
  },
})