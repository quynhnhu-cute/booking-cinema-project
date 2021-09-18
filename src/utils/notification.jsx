import {
    RadiusBottomrightOutlined
} from '@ant-design/icons';
import { Button, notification } from 'antd';

const Context = React.createContext({ name: 'Default' });

export const Notification = (props) => {
    const {content} = props.content;
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.info({
      message: `Thông báo`,
      description: <Context.Consumer>{({ contentNoti }) => `${contentNoti}`}</Context.Consumer>,
      placement,
    });
  };

  return (
    <Context.Provider value={{ name: content }}>
      {contextHolder}
        <Button type="primary" onClick={() => openNotification('bottomRight')}>
          <RadiusBottomrightOutlined />
          bottomRight
        </Button>
    </Context.Provider>
  );
};
