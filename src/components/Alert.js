import React from 'react'
import './Alert.css'

export default function Alert({ alertType }) {
  if (alertType === "create") {
    return (
      <div className='alert alert-create'>
        아이템이 생성되었습니다.
      </div>
    )
  } else if (alertType === "edit") {
    return (
      <div className='alert alert-edit'>
        아이템이 수정되었습니다.
      </div>
    )
  } else if (alertType === "delete") {
    return (
      <div className='alert alert-delete'>
        아이템이 삭제되었습니다.
      </div>
    )
  } else if (alertType === "delete-all") {
    return (
      <div className='alert alert-delete'>
        아이템이 모두 삭제되었습니다.
      </div>
    )
  }
}
