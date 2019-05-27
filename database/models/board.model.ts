import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

import BoardComment from './boardComment.model';
import BoardCommentLike from './boardCommentLike.model';
import BoardLike from './boardLike.model';
import BoardManageLog from './boardManageLog.model';
import BoardPatchLog from './boardPatchLog.model';
import User from './user.model';
import BoardImage from './boardImage.model';

@Table({
  timestamps: true,
})
export default class Board extends Model<Board> {
  @AutoIncrement
  @PrimaryKey
  @AllowNull(false)
  @Column(DataType.INTEGER)
  public pk: number;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.UUID)
  public user_pk: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public user_name: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  public content: string;

  @CreatedAt
  public createdAt: Date;

  @UpdatedAt
  public updatedAt: Date;

  @DeletedAt
  public deletedAt: Date;

  @BelongsTo(() => User, {
    onDelete: 'CASCADE',
  })
  public user: User;

  @HasMany(() => BoardComment)
  public comment: BoardComment[];
  @HasMany(() => BoardLike)
  public boardLike: BoardLike[];
  @HasMany(() => BoardImage)
  public boardImage: BoardImage[];

  @HasMany(() => BoardPatchLog)
  public boardPatchLog: BoardPatchLog[];
  @HasMany(() => BoardManageLog)
  public BoardManageLog: BoardManageLog[];
}
