import { ADDRESS_LENGTH } from '../../../../common';
import { AddressSerializer } from '../../address';
import { Address } from '../../../crypto';
import { readUint64LE, writeUint64LE, IReadData } from '../../common';

/**
  * ### TxDataRegister
  * http://dev.nuls.io/protocol/transaction.html#TX-TYPE-REGISTER-AGENT
  *
  * ### TX_TYPE_REGISTER_AGENT
  *
  * | 尺寸   | 字段           | 数据类型    | 说明         |
  * | ---- | --------------- | ------- | -------------- |
  * | 8    | deposit         | uint64  | 抵押金额        |
  * | 23   | agentAddress    | Address |  节点地址       |
  * | 23   | packingAddress  | Address |  打包地址       |
  * | 23   | rewardAddress   | Address |  奖励地址       |
  * | 8    | commissionRate  | Double  |  昵称           |
 */

export interface ITxDataRegisterData {
  deposit: number;
  agentAddress: Address;
  packingAddress: Address;
  rewardAddress: Address;
  commissionRate: number;
}

export interface ITxDataRegisterOutput extends IReadData {
  readBytes: number;
  data: ITxDataRegisterData;
}

/**
 * Class to handle the protocol TxDataRegister type
 * https://github.com/nuls-io/nuls/blob/6e22e5ba554fae9e690faaa3797cdddb49f90c44/consensus-module/poc/consensus-poc-protocol/src/main/java/io/nuls/consensus/poc/protocol/entity/Agent.java#L49
 */
export class TxDataRegisterSerializer {

  private static BYTES_LENGTH = 8 + 8 + (ADDRESS_LENGTH * 3);

  /**
   * Size of the serialized data
   * @returns the bytes size of a serialized txDataRegister
   */
  public static size(): number {
    
    return TxDataRegisterSerializer.BYTES_LENGTH;

  }

  /**
   * Reads a txDataRegister buf at the specified offset
   * @param buf Buffer object from where the data will be read
   * @param offset Number of bytes to skip before starting to read
   */
  public static read(buf: Buffer, offset: number): ITxDataRegisterOutput {

    const deposit: number = readUint64LE(buf, offset);
    offset += 8;

    const agentAddress: Address = AddressSerializer.read(buf, offset).data;
    offset += ADDRESS_LENGTH;

    const packingAddress: Address = AddressSerializer.read(buf, offset).data;
    offset += ADDRESS_LENGTH;

    const rewardAddress: Address = AddressSerializer.read(buf, offset).data;
    offset += ADDRESS_LENGTH;

    const commissionRate: number = buf.readDoubleLE(offset);

    return {
      readBytes: TxDataRegisterSerializer.BYTES_LENGTH,
      data: {
        deposit,
        agentAddress,
        packingAddress,
        rewardAddress,
        commissionRate,
      }
    };

  }

  /**
   * Writes txDataRegister to buf at the specified offset
   * @param data txDataRegister to be written to buf
   * @param buf Buffer object where the txDataRegister will be written
   * @param offset Number of bytes to skip before starting to write. Must satisfy
   * @returns Offset plus the number of bytes that has been written
   */
  public static write(data: ITxDataRegisterData, buf: Buffer, offset: number): number {

    offset = writeUint64LE(data.deposit, buf, offset);
    offset = AddressSerializer.write(data.agentAddress, buf, offset);
    offset = AddressSerializer.write(data.packingAddress, buf, offset);
    offset = AddressSerializer.write(data.rewardAddress, buf, offset);
    offset = buf.writeDoubleLE(data.commissionRate, offset);

    return offset;

  }

}
