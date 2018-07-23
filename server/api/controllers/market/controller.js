import l from '../../../common/logger';
import MarketService from '../../services/market.service';

export class MarketController {
  priceByName(req, res, next) {
    l.info('Received price by name request');
    MarketService.getPriceByName(req.query.name, req.query.strict)
      .then(r => res.json(r))
      .catch(error => next(error));
  }
  priceById(req, res, next) {
    l.info('Received price by id request');
    MarketService.getPriceById(req.query.id)
      .then(r => res.json(r))
      .catch(error => next(error));
  }
}
export default new MarketController();
