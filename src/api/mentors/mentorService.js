import { Service } from '../core/coreService';

class MentorService {
    /* createOrder(url, body) {
      return Service.post(url, body);
    }

    deleteOrder(id) {
      return Service.delete(id);
    }

    getOrder(url, config, body) {
      return Service.post(url, config, body);
    };

    updateOrder(url, config, body) {
      return Service.post(url, config, body);
    } */
    getAllMentors(url) {
        return Service.get(url);
    }
}

export {
    MentorService
};