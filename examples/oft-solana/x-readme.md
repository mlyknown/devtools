cd ~/lm/devtools/examples/oft-solana/
git restore .

solana-keygen new -o target/deploy/endpoint-keypair.json --force
solana-keygen new -o target/deploy/oft-keypair.json --force
anchor keys sync
anchor keys list
vim programs/oft/src/lib.rs 
anchor build -v 
npx hardhat lz:solana:get-priority-fees --eid 40168 --address GfzM8nEV9MGNB8iLj8TxuYaTesrqRA8LERCFV7ggxxwv
sh -c "$(curl -sSfL https://release.solana.com/v1.18.26/install)"
solana program deploy --program-id target/deploy/oft-keypair.json target/verifiable/oft.so -u devnet --with-compute-unit-price 10000
```
    Program Id: 4ieeS577mR26kpqPiKBp8DCMCXzv4taxhicnQePK1nWc
```
sh -c "$(curl -sSfL https://release.solana.com/v1.17.31/install)"

pnpm hardhat lz:oft-adapter:solana:create --eid 40168 --program-id 4ieeS577mR26kpqPiKBp8DCMCXzv4taxhicnQePK1nWc --mint 53E5G7pWXSyagv4yKggPz1e6ioseumjT6asgDLicjo3Q --token-program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA

cat ./deployments/solana-testnet/OFT.json
vim ./layerzero.config.ts

npx hardhat lz:deploy
npx hardhat lz:oapp:init:solana --oapp-config layerzero.config.ts --solana-secret-key <your-key> --solana-program-id 4ieeS577mR26kpqPiKBp8DCMCXzv4taxhicnQePK1nWc
npx hardhat lz:oapp:wire --oapp-config layerzero.config.ts --solana-secret-key <your-key> --solana-program-id 4ieeS577mR26kpqPiKBp8DCMCXzv4taxhicnQePK1nWc

npx hardhat lz:oft:solana:send --amount 1000 --from-eid 40168 --to 0xa9D15c1c8B264c9082483BBf39Dafb2B844CCbA0 --to-eid 40161 --mint 53E5G7pWXSyagv4yKggPz1e6ioseumjT6asgDLicjo3Q --program-id 4ieeS577mR26kpqPiKBp8DCMCXzv4taxhicnQePK1nWc --escrow HrdS3ajax5jt1hUswKBVSQYVcEjdkEsD4o5VhHhpBaDj

npx hardhat --network avalanche-testnet send --dst-eid 40168 --amount 100000000000000000 --to  HYk2j9pQdNaf7yUcQgqvbKyBQ5cgw5TChJGAPvPVCvNH

# ---------

cd ~/lm/devtools/examples/oft-solana/
git restore .

solana-keygen new -o target/deploy/endpoint-keypair.json --force
solana-keygen new -o target/deploy/oft-keypair.json --force
anchor keys sync
anchor keys list
vim programs/oft/src/lib.rs 
anchor build -v 
npx hardhat lz:solana:get-priority-fees --eid 40168 --address GfzM8nEV9MGNB8iLj8TxuYaTesrqRA8LERCFV7ggxxwv
sh -c "$(curl -sSfL https://release.solana.com/v1.18.26/install)"
solana program deploy --program-id target/deploy/oft-keypair.json target/verifiable/oft.so -u devnet --with-compute-unit-price 10000
```
    Program Id: 4ieeS577mR26kpqPiKBp8DCMCXzv4taxhicnQePK1nWc
```
sh -c "$(curl -sSfL https://release.solana.com/v1.17.31/install)"

pnpm hardhat lz:oft-adapter:solana:create --eid 40168 --program-id 4ieeS577mR26kpqPiKBp8DCMCXzv4taxhicnQePK1nWc --mint 53E5G7pWXSyagv4yKggPz1e6ioseumjT6asgDLicjo3Q --token-program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA

cat ./deployments/solana-testnet/OFT.json
vim ./layerzero.config.ts

npx hardhat lz:deploy
npx hardhat lz:oapp:init:solana --oapp-config layerzero.config.ts --solana-secret-key <your-key> --solana-program-id 4ieeS577mR26kpqPiKBp8DCMCXzv4taxhicnQePK1nWc
npx hardhat lz:oapp:wire --oapp-config layerzero.config.ts --solana-secret-key <your-key> --solana-program-id 4ieeS577mR26kpqPiKBp8DCMCXzv4taxhicnQePK1nWc

npx hardhat lz:oft:solana:send --amount 1000 --from-eid 40168 --to 0xa9D15c1c8B264c9082483BBf39Dafb2B844CCbA0 --to-eid 40161 --mint 53E5G7pWXSyagv4yKggPz1e6ioseumjT6asgDLicjo3Q --program-id 4ieeS577mR26kpqPiKBp8DCMCXzv4taxhicnQePK1nWc --escrow HrdS3ajax5jt1hUswKBVSQYVcEjdkEsD4o5VhHhpBaDj

npx hardhat --network avalanche-testnet send --dst-eid 40168 --amount 100000000000000000 --to  HYk2j9pQdNaf7yUcQgqvbKyBQ5cgw5TChJGAPvPVCvNH

# -------


npx hardhat lz:oft-adapter:solana:create --eid 40168 --program-id CsMk17GHMAZk7jqWdKEVDYZipHkbgZwY9FXZ4NJgYbjE  --mint BNpMPy86dVVmQY7RdN3LxsbGD5x44w3si5wfk8JDkCK6 --token-program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA
Or
npx  hardhat lz:oft:solana:create --eid 40168 --program-id GfzM8nEV9MGNB8iLj8TxuYaTesrqRA8LERCFV7ggxxwv --additional-minters HYk2j9pQdNaf7yUcQgqvbKyBQ5cgw5TChJGAPvPVCvNH

cat  ./deployments/solana-testnet/OFT.json
npx hardhat lz:oapp:init:solana --oapp-config layerzero.config.ts --solana-secret-key <your-key> --solana-program-id GfzM8nEV9MGNB8iLj8TxuYaTesrqRA8LERCFV7ggxxwv

npx hardhat lz:oapp:wire --oapp-config layerzero.config.ts --solana-secret-key <your-key> --solana-program-id GfzM8nEV9MGNB8iLj8TxuYaTesrqRA8LERCFV7ggxxwv

npx hardhat --network sepolia-testnet send --dst-eid 40168 --amount 100000000000000000 --to  HYk2j9pQdNaf7yUcQgqvbKyBQ5cgw5TChJGAPvPVCvNH

npx hardhat lz:oft:solana:send --amount 1000 --from-eid 40168 --to 0xa9D15c1c8B264c9082483BBf39Dafb2B844CCbA0 --to-eid 40161 --mint CY76n6QWp6xyNshr3SWxF3eJ8M6s4dR3r1EJNHoFfSuv --program-id GfzM8nEV9MGNB8iLj8TxuYaTesrqRA8LERCFV7ggxxwv --escrow F9MMgML9CCQbC63BjDKubqG5tr4CKrHczSgxmewvvvxQ






spl-token mint CY76n6QWp6xyNshr3SWxF3eJ8M6s4dR3r1EJNHoFfSuv 10000000000 --multisig-signer ~/.config/solana/id.json --owner 9R9vpi7xSERgqVTapjJFmXE7gd1YGUAmvv1FqA6RFSsU


pnpm hardhat lz:oft:solana:setauthority --eid 40168 --mint CY76n6QWp6xyNshr3SWxF3eJ8M6s4dR3r1EJNHoFfSuv --program-id GfzM8nEV9MGNB8iLj8TxuYaTesrqRA8LERCFV7ggxxwv --escrow F9MMgML9CCQbC63BjDKubqG5tr4CKrHczSgxmewvvvxQ --additional-minters DBZp8TwBom8MiLRCgDTNcQfb9oWBwXgPsfTc1KuWLj1W


### --------------------------
