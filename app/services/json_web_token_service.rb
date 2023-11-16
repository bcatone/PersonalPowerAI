class JsonWebTokenService
  SECRET_KEY = Rails.application.secrets.secret_key_base

  def self.encode(payload, exp = 24.hours.from_now)
    payload[:exp] = exp.to_i
    JWT.encode(payload, SECRET_KEY)
  end

  def self.decode(token)
    decoded = JWT.decode(token, SECRET_KEY)[0]
    HashWithIndifferentAccess.new decoded
  end
    # def self.encode(payload)
    #   JWT.encode(payload, Rails.application.credentials.secret_key_base)
    # end
  
    # def self.decode(token)
    #   JWT.decode(token, Rails.application.credentials.secret_key_base).first
    # rescue JWT::DecodeError
    #   nil
    # end
  end