# 准备
## clone https://github.com/mlyknown/devtools/tree/x/examples/oft 进入目录
## npm i

# 配置私钥
参考.env.example 添加.env

## 部署token
### deploy
npx hardhat lz:deploy

### set peer
npx hardhat lz:oapp:wire --oapp-config layerzero.config.ts

### mint


### x-send