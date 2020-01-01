import React, { Component } from 'react';
import items from './data'
import Client from './contentful'
// 透過 React Context API 可以將資料傳到直接傳送到需要的組件，而不需要手動一直透過 props 傳入
// Step1: 建立Context
const RoomContext = React.createContext()
// Step2: 使用Context.Provider
// <RoomContext.Provider>

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        // 建立搜尋初始資料
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false,
    };
    // Contentful get Data
    getData = async () => {
        try {
            let response = await Client.getEntries({
                content_type: 'beachResortRoom',
                // 分類依照字母順序
                // order: 'sys.createdAt',
                // 分類依照金額由小到大
                // order: 'fields.price'
                // 分類依照金額由大到小
                // order: '-fields.price'
            })
            console.log(response)
            let rooms = this.formatData(items)
            let featuredRooms = rooms.filter(room => room.featured === true)
            let maxPrice = Math.max(...rooms.map(item => item.price))
            let maxSize = Math.max(...rooms.map(item => item.size))

            this.setState({
                rooms,
                featuredRooms,
                sortedRooms: rooms,
                loading: false,
                price: maxPrice,
                maxPrice,
                maxSize,
            });
        } catch (error) {
            console.log(error)
        }
    }
    // 獲取資料
    componentDidMount() {
        this.getData()
        // let rooms = this.formatData(items)
        // let featuredRooms = rooms.filter(room => room.featured === true)
        // let maxPrice = Math.max(...rooms.map(item => item.price))
        // let maxSize = Math.max(...rooms.map(item => item.size))

        // this.setState({
        //     rooms,
        //     featuredRooms,
        //     sortedRooms: rooms,
        //     loading: false,
        //     price: maxPrice,
        //     maxPrice,
        //     maxSize,
        // })
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url)
            let room = { ...item.fields, images, id }
            return room;
        });
        return tempItems
    }

    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => {
            return room.slug === slug
        })
        return room
    }

    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = event.target.name;
        console.log(name, value)
        this.setState({
            [name]: value,
        },
            this.filterRooms,
        )
    }

    filterRooms = () => {
        console.log(this.state)
        let {
            rooms,
            type,
            capacity,
            price,
            minSize,
            maxSize,
            breakfast,
            pets,
        } = this.state
        capacity = parseInt(capacity)
        price = parseInt(price)
        minSize = parseInt(minSize)
        maxSize = parseInt(maxSize)
        // 所有的Room
        var tempRooms = [...rooms];
        // 過濾類型
        // 當類型不是all的時候執行
        if (type !== 'all') {
            // 裡用filter過濾類型回傳一個陣列
            tempRooms = tempRooms.filter(room => room.type === type)
        }
        // 過濾容納人數
        // 當可容納人數不是1的時候
        // 利用parseInt() 函式能將輸入的字串轉成整數。
        // 將capacity從字串轉換為整數
        if (capacity !== 1) {
            // 裡用filter過濾類型回傳一個陣列
            tempRooms = tempRooms.filter(room => room.capacity >= capacity)
        }
        // 過濾金額
        // 當金額小於或等於
        tempRooms = tempRooms.filter(room => room.price <= price)
        // 過濾房間大小
        tempRooms = tempRooms.filter(room => {
            return (
                room.size >= minSize
            )
        })
        tempRooms = tempRooms.filter(room => {
            return (
                room.size <= maxSize
            )
        })
        // 過濾是否要早餐
        if (breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast === true)
        }
        // 過濾是否能帶寵物
        if (pets) {
            tempRooms = tempRooms.filter(room => room.pets === true)
        }

        // 當type改變時將sortedRooms設置tempRooms
        this.setState({
            sortedRooms: tempRooms
        })
    }
    render() {
        return (
            <RoomContext.Provider value={{
                // 解構賦值
                ...this.state,
                getRoom: this.getRoom,
                handleChange: this.handleChange,
            }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}
// Step3.方法二 在 Functional Component 中使用 Context 的值
const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return (
            <RoomConsumer>
                {
                    value => <Component {...props} context={value} />
                }
            </RoomConsumer>
        )
    }
}

export { RoomProvider, RoomConsumer, RoomContext };