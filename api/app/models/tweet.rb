class Tweet < ApplicationRecord

  def time
    return self.updated_at.strftime("%Y/%m/%d %H:%M")
  end

end
