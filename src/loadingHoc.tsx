import * as React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import styles from './styles'

import { IOptions, IProps } from './types';

const loadingHoc = (predicate: (props: any) => boolean, options?: IOptions) => (WrappedComponent: React.ComponentType<any>) =>
  class LoadingHoc extends React.PureComponent<IProps> {
    render() {
      const o = options || {}

      if (!predicate(this.props))
        return <WrappedComponent {...this.props} />

      return (
        <React.Fragment>
          { o.renderChild && <WrappedComponent {...this.props} /> }
          <View style={[styles.overlayWrapper, { backgroundColor: o.overlayColor || 'rgba(0,0,0,.6)'}]}>
            <View style={styles.loadingWrapper}>
              <ActivityIndicator size="large" />
              <Text style={styles.loadingText}>{o.text || 'Loading...'}</Text>
            </View>
          </View>
        </React.Fragment>
      )
    }
  }

export default loadingHoc