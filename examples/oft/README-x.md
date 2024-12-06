# 准备
## clone 
git clone https://github.com/LayerZero-Labs/devtools.git
cd devtools
git checkout x
cd examples/oft

## npm i

# 配置私钥
创建 .env 文件
参考.env.example

## 部署token
### deploy
npx hardhat lz:deploy

### set peer
npx hardhat lz:oapp:wire --oapp-config layerzero.config.ts

## mint
// npx hardhat --network avalanche-testnet run scripts/mint.ts
// npx hardhat --network sepolia-testnet run scripts/mint.ts

默认mint 100 token

## send
// npx hardhat --network avalanche-testnet run scripts/send.ts
// npx hardhat --network sepolia-testnet run scripts/send.ts


代码里const TO_ADDR = "0xa9D15c1c8B264c9082483BBf39Dafb2B844CCbA0"
为跨链目标地址，默认为1个token