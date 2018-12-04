class GetBooksController < ApplicationController
def books
  begin
    @resp = Faraday.get 'https://api.nytimes.com/svc/books/v3/lists.json' do |req|
      req.params['api_key'] = '9f15ceb2385e41099d2c592976578ead'
      req.params['list'] = 'trade-fiction-paperback'
    end
    body = JSON.parse(@resp.body)
    if @resp.success?
      @books = body["results"].map{|b| b["book_details"].push(rank: b["rank"], weeks_on_list: b["weeks_on_list"]) + b["reviews"].flatten}
      render json: @books
    else
      @error = body["meta"]["errorDetail"]
    end

  end

end
end
