var React = require('react-native');

var {
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  ListView,
  View,
} = React;

var styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',

    marginBottom: 5,

    alignItems: 'center',
    backgroundColor: '#fff',
  },
  listView: {
    textAlign: 'center',
    margin: 10,
  },
  picture: {
    borderRadius: 53,
    width: 53,
    height: 53,
  },
  rightContainer: {
    flex: 1,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1'
  },
  title: {
    fontSize: 14,
    marginBottom: 2,
  },
  artist: {
    fontSize: 12,
  },
  backgroundVideo: {
    resizeMode: 'cover', // stretch and contain also supported
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});


var List = React.createClass({
    onTouch: function(url){
      //TODO: 音乐接口未找到
    },
    renderList: function(music){
        return (
            <TouchableOpacity onPress={() => this.onTouch(music.url)}>
              <View style={styles.wrap}>
                <Image
                  source={{uri: music.picture}}
                  style={styles.picture}
                />
                <View style={styles.rightContainer}>
                  <Text style={styles.title}>{music.title}</Text>
                  <Text style={styles.artist}>{music.artist}</Text>
                </View>
              </View>
            </TouchableOpacity>

        );
    },
    render: function(){
      console.log(123);
        return <ListView
            dataSource={this.props.dataSource}
            renderRow={this.renderList}
            style={styles.listView} />
    }
})
module.exports = List;