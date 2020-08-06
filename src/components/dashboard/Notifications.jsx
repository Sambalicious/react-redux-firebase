import React from 'react'
import {useSelector} from 'react-redux';
import { useFirestoreConnect } from "react-redux-firebase";
import moment from "moment"
const Notifications = () => {
    useFirestoreConnect([{collection: "notifications", limit: 3, orderBy:['time', 'desc']}]);

    const notification = useSelector((state) => state.firestore.ordered.notifications);
    
    return ( 
      <div className="section">
          <div className="card z-index-0">
              <div className="card-content">
                  <span className="card-title">Notification</span>
                  <ul className="notifications">
                       {notification && notification.map(item => {
                          return ( 
                          <li key={item.id}>
                              <span className="pink-text">{item.user}  </span>
                              <span> - {item.content}</span>
                              <div className="grey-text note-date">
                                    {moment(item.time.toDate()).fromNow()}
                              </div>
                               </li>
                               )
                       })}
                  </ul>
              </div>
          </div>
      </div>
     );
}
 
export default Notifications;