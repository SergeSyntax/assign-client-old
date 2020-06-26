import React from 'react'
import './PasswordRecovery.scss'
import Link from 'components/Auth/Link/Link'
import './PasswordRecovery.scss'

export const PasswordRecovery = () => {
  return (
    <div className="forget-password-link">
      <Link text="Forgot password?" to="/password-recovery" />
    </div>
  )
}
